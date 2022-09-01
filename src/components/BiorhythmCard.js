import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import React from 'react'
import dayjs from 'dayjs'
import { implementationCalculateBiorhythm } from '../Utils/calculations';
import { BiorhythmCharts } from './BiorhythmCharts';
import './BiorhythmCard.css'

const dateFormat = isoString => {
  return dayjs(isoString).format('D MMM YYYY');
}
const BiorhythmCard = ({ birthday, targetDate }) => {
  const { physical, emotional, intellectual } = implementationCalculateBiorhythm(birthday, targetDate);

  return (
    <>
      <IonCard className='biorhythm-card ion-text-center'>
        <IonCardHeader>
          <IonCardTitle>{dateFormat(birthday)}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <BiorhythmCharts birthDate={birthday} targetDate={targetDate}></BiorhythmCharts>
          <p className='physical'>Physical: {physical}%</p>
          <p className='emotional'>Emotional: {emotional}%</p>
          <p className='intellectual'>Intellectual: {intellectual}%</p>
        </IonCardContent>
      </IonCard>
    </>
  )
}

export default BiorhythmCard