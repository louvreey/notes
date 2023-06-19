import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HeaderComponent, MainComponent} from '../components/NoteComponent';

const EditNoteScreen = props => {
  const {route, navigation} = props;
  const id = route.params.id;
  const [dataToUpdate, setDataToUpdate] = useState([]);

  useEffect(() => {
    const data = realm.objects('Note').filtered(`id = ${id}`);
    setDataToUpdate(data)
  }, [])

  useEffect(() => {
    console.log('edit screen');
    console.log(dataToUpdate);
  }, [dataToUpdate]);

  return (
    <View style={styles.mainContainer}>
      <HeaderComponent title="Edit" />
      <MainComponent date="Date" />
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
