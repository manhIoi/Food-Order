import React, {useState} from 'react';
import {Modal, View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Input} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';
import ButtonPrimary from '../Button/ButtonPrimary';
import {callApiCheckPassword} from '../../api/apiUsers';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../redux/actions/userAction';

function ModalChangePassword(props) {
  const {isHideModal, setIsHideModal} = props;
  const [inputPassword, setInputPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const [isNext, setIsNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowNewPass, setIsShowNewPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleCheckingPassword = async () => {
    setIsLoading(true);
    const isValidPassword = await callApiCheckPassword(user._id, {
      password: inputPassword,
    });
    setIsLoading(false);
    if (isValidPassword.value) {
      setIsNext(true);
    } else {
      alert(isValidPassword.message);
    }
  };

  const handleChangePassword = async () => {
    setIsLoading(true);
    const body = await dispatch(
      changePassword(user._id, {
        password: inputNewPassword,
        confirmPassword: inputConfirmPassword,
      }),
    );
    if (!body.error) {
      alert('Password updated');
    } else {
      alert(body.error);
    }
    setIsLoading(false);
  };

  return (
    <Modal
      animationType="slide"
      visible={isHideModal}
      onRequestClose={() => {
        setModalVisible(!isHideModal);
      }}>
      <View style={styles.modalView}>
        <IconButton
          style={styles.closeModalBtn}
          icon="close"
          size={30}
          onPress={() => setIsHideModal(!isHideModal)}
          color={rootColor.redPrimaryColor}
        />
        <View style={styles.modalForm}>
          {!isNext ? (
            <>
              <Input
                labelStyle={styles.inputLabel}
                label="Mật khẩu hiện tại"
                placeholder="Nhập mật khẩu hiện tại"
                style={styles.inputField}
                onChangeText={text => setInputPassword(text)}
                secureTextEntry={!isShowPass}
                rightIcon={() => (
                  <IconButton
                    icon="eye"
                    color={
                      !isShowPass
                        ? rootColor.grayPrimaryColor
                        : rootColor.primaryColor
                    }
                    size={22}
                    onPress={() => setIsShowPass(!isShowPass)}
                  />
                )}
              />
              <ButtonPrimary
                contents={[`${!isLoading ? 'Kiểm tra' : 'ActivityIndicator'}`]}
                callBack={handleCheckingPassword}
              />
            </>
          ) : (
            <>
              <Input
                labelStyle={styles.inputLabel}
                label="Mật khẩu mới"
                placeholder="Mật khẩu mới"
                style={styles.inputField}
                onChangeText={text => setInputNewPassword(text)}
                secureTextEntry={!isShowNewPass}
                rightIcon={() => (
                  <IconButton
                    icon="eye"
                    color={
                      !isShowNewPass
                        ? rootColor.grayPrimaryColor
                        : rootColor.primaryColor
                    }
                    size={22}
                    onPress={() => setIsShowNewPass(!isShowNewPass)}
                  />
                )}
              />
              <Input
                labelStyle={styles.inputLabel}
                label="Nhập lại mật khẩu"
                placeholder="Nhập lại mật khẩu"
                style={styles.inputField}
                onChangeText={text => setInputConfirmPassword(text)}
                secureTextEntry={!isShowConfirmPass}
                rightIcon={() => (
                  <IconButton
                    icon="eye"
                    color={
                      !isShowConfirmPass
                        ? rootColor.grayPrimaryColor
                        : rootColor.primaryColor
                    }
                    size={22}
                    onPress={() => setIsShowConfirmPass(!isShowConfirmPass)}
                  />
                )}
              />
              <ButtonPrimary
                contents={[`${!isLoading ? 'Xác nhận' : 'ActivityIndicator'}`]}
                callBack={handleChangePassword}
              />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: rootColor.whiteColor,
    fontSize: 15,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalForm: {
    width: '90%',
  },
  inputLabel: {
    color: rootColor.primaryColor,
    fontSize: 15,
    width: '100%',
  },
  closeModalBtn: {
    color: rootColor.primaryColor,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ModalChangePassword;
