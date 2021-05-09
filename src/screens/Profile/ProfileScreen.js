import React from 'react';
import {View, Text, Alert} from 'react-native';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import stylesProfile from './styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import rootColor from '../../constants/color';
import {TouchableOpacity} from 'react-native';

function ProfileScreen() {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  console.log(user);

  const handleLogout = () => {
    Alert.alert('Bạn chắc chắn muốn thoát');
  };

  return (
    <View style={stylesProfile.profileContainer}>
      <View style={stylesProfile.profileHeader}>
        <View style={stylesProfile.headerNameContainer}>
          <Text style={stylesProfile.headerNameText}>
            {!user._id ? 'Bạn cần đăng nhập' : `Hi, Im ${user.name}`}
          </Text>
        </View>
      </View>

      <View style={stylesProfile.profileBody}>
        {!user._id ? (
          <View style={stylesProfile.bodyNavigateBtn}>
            <ButtonPrimary
              callBack={() => navigation.navigate('Auth')}
              contents={[
                'Đăng nhập',
                <MaterialIcon size={20} name="navigate-next" />,
              ]}
              options={{
                width: '50%',
                justifyContent: 'space-between',
              }}
            />
          </View>
        ) : (
          <View style={stylesProfile.bodyContainer}>
            <TouchableOpacity
              onPress={() => navigation.push('My Info')}
              activeOpacity={0.5}
              style={stylesProfile.bodySelection}>
              <Text>Thông tin của tôi</Text>
              <MaterialIcon
                name="navigate-next"
                size={20}
                color={rootColor.grayPrimaryColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push('Help')}
              activeOpacity={0.5}
              style={stylesProfile.bodySelection}>
              <Text>Hỗ trợ</Text>
              <MaterialIcon
                name="navigate-next"
                size={20}
                color={rootColor.grayPrimaryColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              activeOpacity={0.5}
              style={stylesProfile.bodySelection}>
              <Text>Đăng xuất</Text>
              <MaterialIcon
                name="logout"
                size={20}
                color={rootColor.grayPrimaryColor}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

export default ProfileScreen;
