import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../components/AppText';
import {BaseButton} from '../components/BaseButton';
import {Colors} from '../consts/Colors';
import {ScreenRoutes} from '../consts/ScreenRoutes';
import store from '../store';
import {NavigateType} from '../types/navigations';

export function ShowRoleScreen() {
  const {navigate}: {navigate: NavigateType} = useNavigation();

  const [nowPlayerName, changeNowPlayerName] = useState('');
  const [nowPartRole, changeNowPartRole] = useState('');
  const [nowPersonRole, changeNowPersonRole] = useState('');

  const [nowIndex, setNowIndex] = useState(0);
  const [showRole, setShowRole] = useState(false);

  const playerList = store.playersStore.playersList;

  useEffect(() => {
    changeNowPlayerName(store.playersStore.playersList[nowIndex].name);
    changeNowPartRole(store.playersStore.playersList[nowIndex].partRole);
    changeNowPersonRole(store.playersStore.playersList[nowIndex].personRole);
  }, [nowIndex]);

  const handleShowNextPlayer = () => {
    setShowRole(false);
    setNowIndex(nowIndex + 1);
  };

  const handleStartGame = () => {
    navigate(ScreenRoutes.GAME_BOARD_SCREEN);
  };

  return (
    <View style={styles.container}>
      <AppText>{nowPlayerName}</AppText>
      {showRole && (
        <>
          <AppText>{`Ваш партийный билет: ${nowPartRole}`}</AppText>
          <AppText>{`Ваша секретная роль: ${nowPersonRole}`}</AppText>
        </>
      )}
      {!showRole && (
        <BaseButton onPress={() => setShowRole(true)}>Показать роль</BaseButton>
      )}
      {showRole && nowIndex < playerList.length - 1 && (
        <BaseButton onPress={handleShowNextPlayer}>Следующий игрок</BaseButton>
      )}
      {nowIndex === playerList.length - 1 && showRole && (
        <BaseButton onPress={handleStartGame}>Начать игру</BaseButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
