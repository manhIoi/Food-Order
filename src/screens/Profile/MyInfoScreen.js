import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';
import {Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import rootColor from '../../constants/color';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import {useForm, Controller} from 'react-hook-form';
import rulesValidate from '../../constants/rulesValidate';
import {re, rp} from '../../constants/varible';
import ModalChangePassword from '../../components/ModalChangePassword/ModalChangePassword';
import {updateUser} from '../../redux/actions/userAction';

function MyInfoScreen() {
  const user = useSelector(state => state.user);
  const [isHideModal, setIsHideModal] = useState(false);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async data => {
    await dispatch(updateUser(user._id, data));
    console.log(data);
    alert('You updated');
  };

  return (
    <View style={styles.myInfoContainer}>
      <View style={styles.myInfoForm}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              style={styles.inputField}
              label="Name"
              labelStyle={styles.inputLabel}
              value={value}
              onChangeText={text => onChange(text)}
              errorMessage={errors.name && errors.name.message}
            />
          )}
          name="name"
          rules={{required: rulesValidate.required('Name')}}
          defaultValue={user.name}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              style={styles.inputField}
              label="Email"
              labelStyle={styles.inputLabel}
              value={value}
              onChangeText={text => onChange(text)}
              errorMessage={errors.email && errors.email.message}
            />
          )}
          name="email"
          rules={{
            required: rulesValidate.required('Email'),
            pattern: rulesValidate.pattern(re, 'Email'),
          }}
          defaultValue={user.email}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              style={styles.inputField}
              label="Phone Number"
              labelStyle={styles.inputLabel}
              value={value}
              errorMessage={errors.phoneNumber && errors.phoneNumber.message}
              onChangeText={text => onChange(text)}
            />
          )}
          name="phoneNumber"
          rules={{
            required: rulesValidate.required('Phone Number'),
            minLength: rulesValidate.minLength(10, 'Phone Number'),
            maxLength: rulesValidate.maxLength(11, 'Phone Number'),
            pattern: rulesValidate.pattern(rp, 'Phone Number'),
          }}
          defaultValue={user.phoneNumber}
        />
        <View
          style={{
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: rootColor.grayPrimaryColor,
          }}>
          <ButtonPrimary
            contents={['Cập nhật']}
            callBack={handleSubmit(onSubmit)}
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <ButtonPrimary
            contents={['Đổi mật khẩu']}
            callBack={() => setIsHideModal(true)}
          />
        </View>
      </View>
      {isHideModal && (
        <ModalChangePassword
          isHideModal={isHideModal}
          setIsHideModal={setIsHideModal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  myInfoContainer: {
    backgroundColor: rootColor.whiteColor,
    flex: 1,
  },
  myInfoForm: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  inputField: {
    backgroundColor: rootColor.whiteColor,
    fontSize: 15,
  },
  inputLabel: {
    color: rootColor.primaryColor,
    fontSize: 15,
  },
});

export default MyInfoScreen;
