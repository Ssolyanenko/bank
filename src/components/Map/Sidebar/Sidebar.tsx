import React, { FC, useState, useEffect, useCallback, ReactElement } from 'react';

import { BranchContainer, CurrentBranch, InputSearchCity, MapButton } from 'components';
import { Button } from 'components/_basic';
import { ArrowLeftIcon, ArrowRightIcon, FilterIcon, PointIcon } from 'assets';
import { COLLAPSE, EXPAND } from 'constants/text';
import { mockBranch } from 'constants/branch';
import { getFilterBranches } from 'helpers/getFilterBranches';
import { Branch } from 'interfaces/branch';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { getBranches, setBranches } from 'store';
import { useTypedDispatch } from 'hooks';
import { WEEK } from 'constants/days';
import { POPULAR_BUTTONS, WORK_BUTTONS, EXTRA_BUTTONS, INITIAL_HIGHTLIGHT_BUTTONS } from 'constants/sidebarButton';
import { getResultButton } from 'helpers/getResultButton';
import classes from './Sidebar.module.scss';

interface Props {
  city: string;
  handleActiveMarker(branch: Branch | null): void;
  setZoom(value: number): void;
  setIsOpenMarker(isOpenedMarker: boolean): void;
  setNewCity(): void;
  calculateRoute(): void;
  distance: string;
}

const { BUTTON } = ButtonType;

export const Sidebar: FC<Props> = ({
  city,
  handleActiveMarker,
  setZoom,
  calculateRoute,
  distance,
  setIsOpenMarker,
  setNewCity,
}): ReactElement => {
  const dispatch = useTypedDispatch();

  const [isOpenFilter, setOpenFilter] = useState(false);
  const [isOpenSidebar, setOpenSidebar] = useState(false);
  const [text, setText] = useState('Expand');
  const [branchData, setBranchData] = useState<Branch[]>([]);
  const [currentBranch, setCurrentBranch] = useState(mockBranch);
  const [clearInput, setClearInput] = useState(false);
  const [openBranch, setOpenBranch] = useState(false);
  const [showSearchList, setShowSearchList] = useState(false);
  const [isBranchesOpen, setBranchesOpen] = useState(false);
  const [branchesFilter, setBranchesFilter] = useState([mockBranch]);
  const [day, setDay] = useState('Monday');
  const [highlightButtons, setHighlightButtons] = useState(INITIAL_HIGHTLIGHT_BUTTONS);

  const requestBranches = useCallback(() => {
    dispatch(getBranches(city, setBranchData));
  }, [city, dispatch]);

  useEffect(() => {
    const date = new Date();
    setDay(WEEK[date.getDay()]);
    requestBranches();
  }, [requestBranches]);

  useEffect(() => {
    const activeButton = highlightButtons.filter((button) => button.isActive).map((button) => button.text);
    const filter = branchData.filter((branch: Branch) =>
      activeButton.every((text: string) => getResultButton(text, branch, day))
    );
    dispatch(setBranches(filter));
  }, [highlightButtons, branchData, day, dispatch]);

  const highlightButton = (element: Element): void => {
    (element.firstChild as Element).classList.toggle(classes.highlight);
    const textButton = (element.firstChild as Element).textContent;
    const currentButton = highlightButtons.find((element) => element.text === textButton);
    currentButton && (currentButton.isActive = !currentButton.isActive);
    currentButton && setHighlightButtons([...highlightButtons, currentButton]);
  };

  const selectBranch = (branch: Branch): void => {
    setCurrentBranch(branch);
    setBranchesOpen(false);
    setOpenBranch(true);
    handleActiveMarker(branch);
    setZoom(15);
  };

  const closeBranch = (branch: Branch): void => {
    setBranchesOpen(true);
    setOpenBranch(false);
    handleActiveMarker(branch);
  };

  const closeModalBranches = (): void => {
    setIsOpenMarker(false);
    setBranchesOpen(false);
    setOpenBranch(false);
  };

  const selectStreet = (name: string): void => {
    setOpenBranch(false);
    setBranchesOpen(true);
    const filterBranches = getFilterBranches(branchData, name);
    setBranchesFilter(filterBranches);
    dispatch(setBranches(filterBranches));
  };

  const openOrCloseSidebar = (): void => {
    setBranchesOpen(false);
    setOpenBranch(false);
    setClearInput(true);
    setOpenSidebar(!isOpenSidebar);
    setOpenFilter(!isOpenFilter);
    setText((text) => (text === EXPAND ? COLLAPSE : EXPAND));
  };

  return (
    <>
      <div className={classes.searchBar}>
        <InputSearchCity
          branches={branchData}
          setShowSearchList={setShowSearchList}
          selectCity={selectStreet}
          closeBranches={closeModalBranches}
          isClearField={clearInput}
          setClearInput={setClearInput}
          placeholder="Search by address"
        />
        <span className={classes.closeButton} role="presentation" onClick={openOrCloseSidebar}>
          {isOpenFilter ? (
            <ArrowLeftIcon className={classes.arrowLeft} />
          ) : (
            <ArrowRightIcon className={classes.arrowRight} />
          )}
        </span>
        <div className={classes.textHover}>
          <div className={classes.point}>{text}</div>
          <PointIcon />
        </div>
        {!isOpenFilter && (
          <span
            className={classes.filter}
            role="presentation"
            onClick={(): void => {
              openOrCloseSidebar();
              setBranchesOpen(false);
              setOpenBranch(false);
            }}
          >
            <MapButton icon={<FilterIcon />} text="Filters" />
          </span>
        )}
      </div>
      {isBranchesOpen && (
        <div className={`${classes.branchesFilter} ${showSearchList && classes.currentBranchIndent}`}>
          {branchesFilter.slice(0, 3).map((branch, index) => (
            <BranchContainer
              key={branch.address + index}
              branch={branch}
              selectBranch={selectBranch}
              distance={distance}
            />
          ))}
        </div>
      )}
      {openBranch && (
        <div className={`${classes.currentBranch} ${showSearchList && classes.currentBranchIndent}`}>
          <CurrentBranch
            branch={currentBranch}
            handleActiveMarker={closeBranch}
            calculateRoute={calculateRoute}
            distance={distance}
          />
        </div>
      )}
      <div className={`${classes.sidebar} ${isOpenSidebar && classes.open}`}>
        <div className={`${classes.navigation} ${showSearchList && classes.hide}`}>
          <div className={classes.bankInform}>
            <span className={classes.branches}>
              Bank branches & ATMS in &nbsp;
              <Button type={BUTTON} className={classes.cityInform} onClick={() => setNewCity()}>
                {city}
              </Button>
            </span>
          </div>
          <div className={classes.filterList}>
            <div className={classes.popular}>
              <span className={classes.filterText}>Popular</span>
              <div className={classes.filterButton}>
                {POPULAR_BUTTONS.map(
                  ({ icon, text }): ReactElement => (
                    <div key={text} role="presentation" onClick={(event): void => highlightButton(event.currentTarget)}>
                      <MapButton icon={icon} text={text} />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={classes.work}>
              <span className={classes.filterText}>Working hours</span>
              <div className={classes.filterButton}>
                {WORK_BUTTONS.map(({ icon, text }) => (
                  <div key={text} role="presentation" onClick={(event): void => highlightButton(event.currentTarget)}>
                    <MapButton icon={icon} text={text} />
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.extras}>
              <span className={classes.filterText}>Extras</span>
              <div className={classes.filterButton}>
                {EXTRA_BUTTONS.map(({ icon, text }) => (
                  <div key={text} role="presentation" onClick={(event): void => highlightButton(event.currentTarget)}>
                    <MapButton icon={icon} text={text} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
