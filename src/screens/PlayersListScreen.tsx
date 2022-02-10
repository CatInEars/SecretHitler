import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {AppText} from '../components/AppText';
import {BaseButton} from '../components/BaseButton';
import {Colors} from '../consts/Colors';
import {ScreenRoutes} from '../consts/ScreenRoutes';
import {convertHeight, convertWidth} from '../helpers/dimensions';
import {getDesiredLengthArr} from '../helpers/getDesiredLengthArr';
import store from '../store';
import {NavigateType} from '../types/navigations';

export function PlayersListScreen() {
  const {navigate}: {navigate: NavigateType} = useNavigation();
  const [playersList, setPlayersList] = useState<{[propName: string]: string}>(
    {},
  );

  const handleSubmit = () => {
    store.playersStore.setPlayersList(Object.values(playersList));
    navigate(ScreenRoutes.SHOW_ROLE_SCREEN);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Введите имена игроков</AppText>
      <View style={styles.inputsContainer}>
        {getDesiredLengthArr(10).map(item => {
          const key = `player_${item}`;
          const handleTextChange = (newName: string) => {
            setPlayersList({...playersList, [key]: newName});
          };

          return (
            <TextInput
              style={styles.input}
              value={playersList[key]}
              onChangeText={handleTextChange}
              placeholder={`Игрок ${item}`}
              key={key}
            />
          );
        })}
        <BaseButton style={styles.button} onPress={handleSubmit}>
          Начать игру
        </BaseButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    paddingVertical: convertHeight(24),
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  inputsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: convertHeight(60),
  },
  input: {
    backgroundColor: Colors.lightgray,
    marginHorizontal: convertWidth(8),
    marginVertical: convertHeight(8),
    width: convertWidth(120),
    height: convertHeight(80),
  },
  button: {
    marginHorizontal: convertWidth(8),
    marginVertical: convertHeight(8),
  },
});
