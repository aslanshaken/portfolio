import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { PATH_PAGE } from '../../routes/paths';


//
export default function ChooseChefPage() {
  const router = useRouter();
  useEffect(() => {
    router.push(PATH_PAGE.searchChef.cities());
  }, [router]);  

  return <></>
}