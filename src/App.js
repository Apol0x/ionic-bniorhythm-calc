import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStore } from './Hooks/useLocalStore';

function App() {
  const [birthday, setDateBirth] = useLocalStore('birthDate', '');
  const [targetDate, setTargetDate] = useState(Date())
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position='floating'>
            Dia de nacimiento
          </IonLabel>
          <IonDatetime value={birthday} displayFormat='DD MMM YYYY' color='dark' onIonChange={(event) => setDateBirth(event.detail.value)}></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>
            Dia actual
          </IonLabel>
          <IonDatetime displayFormat='DD MMM YYYY' value={targetDate} color='dark' onIonChange={(event) => setTargetDate(event.detail.value)}></IonDatetime>
        </IonItem>
        {birthday &&
          /* birth card */
          <BiorhythmCard birthday={birthday}></BiorhythmCard>}
      </IonContent>
    </IonApp >
  );
}

export default App;
