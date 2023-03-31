import React, { useEffect, useState } from 'react';
import ComingDialog from 'src/sections/home/ComingDialog';
import CityDialog from 'src/sections/home/CityDialog';
import CuisineDialog from 'src/sections/home/CuisineDialog';
import { useSelector } from 'src/redux/store';
import { DIALOG_SELECTOR } from 'src/redux/slices/dialog';

export default function DialgProvider() {

  const { current: openedDialog } = useSelector(DIALOG_SELECTOR);

  const isOpenComingDialog = openedDialog === 'coming_dialog';
  const isOpenCityDialog = openedDialog === 'choose_city_dialog';
  const isOpenCuisineDialog = openedDialog === 'choose_cuisine_dialog';

  const [comingDialogIsOpen, setComingDialogIsOpen] = useState(false);
  const [cityDialogIsOpen, setCityDialogIsOpen] = useState(false);
  const [cuisineDialogIsOpen, setCuisineDialogIsOpen] = useState(false);

  useEffect(() => {
    setComingDialogIsOpen(isOpenComingDialog);
  }, [isOpenComingDialog]);

  useEffect(() => {
    setCityDialogIsOpen(isOpenCityDialog);
  }, [isOpenCityDialog]);

  useEffect(() => {
    setCuisineDialogIsOpen(isOpenCuisineDialog);
  }, [isOpenCuisineDialog]);

  return (
    <>
      <ComingDialog isOpen={comingDialogIsOpen} />
      <CityDialog isOpen={cityDialogIsOpen} />
      <CuisineDialog isOpen={cuisineDialogIsOpen} />
    </>
  );
}