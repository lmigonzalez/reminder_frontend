import React from 'react';

import Header from '../../components/Header';
import DataDisplayed from '../../components/DataDisplayed';
import DataTable from '../../components/DataTable';

function Home() {
  return (
    <section className="bg-[#E8F9FD] w-full min-h-screen">
		<Header/>
		<DataDisplayed/>
		<DataTable/>
    </section>
  );
}

export default Home;
