import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const TOPNAVI_H = 50;
const BANNER_H = 300;

function TopNavigation(props) {
  const safeArea = useSafeArea();

  const {title, scrollY} = props;
  const isFloating = !!scrollY;
  const [isTransparent, setTransparent] = useState(isFloating);
  const navigation = useNavigation();

  useEffect(() => {
    if (!scrollY) {
      return;
    }
    const listenerId = scrollY.addListener(a => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollY.removeListener(listenerId);
  });

  return (
    <View style={styles.container(safeArea, isFloating, isTransparent)}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.title(isTransparent)}>{title}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
            top: -10,
            padding: 10,
          }}>
          <Text style={[styles.title(isTransparent)]}>
            <MaterialIcon name="arrow-back" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'center',
    shadowOffset: {y: 0},
    backgroundColor: isTransparent ? '#0001' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: isTransparent => ({
    fontWeight: 'bold',
    fontSize: 16,
    color: isTransparent ? '#FFF' : '#000',
  }),
};

export default TopNavigation;
