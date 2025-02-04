import React from 'react';
import { Card } from '../card';


// type HeaderCardsProps = {}

export const HeaderCards: React.FC<any> = ({profileData}) => {
  return (
    <div className='w-6/12 lg:w-8/12 mx-auto flex flex-col lg:flex-row  gap-5 lg:gap-2 lg:justify-between'>
        <Card title='Average Kyra Fee' description='' cardClass='border-[1px] border-gray !gap-7 min-w-fit' />
        <Card title='Average Kyra CPV' description='' cardClass='border-[1px] border-gray !gap-7 min-w-fit' />
        <Card title='Predicted Fee' descriptionPrefix='&#x24;' descriptionClass='' description={Math.floor(profileData.predictedFee).toLocaleString()} cardClass='border-[1px] border-gray gap-2 min-w-fit' />
        <Card title='Predicted CPV' descriptionPrefix='&#x24;' description={profileData.predictedCpv} cardClass='border-[1px] border-gray gap-2 min-w-fit' />
    </div>
  )
}
