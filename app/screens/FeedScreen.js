import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function FeedScreen() {
  const [dropdown1, setDropdown1] = useState('option1');
  const [dropdown2, setDropdown2] = useState('option1');
  const [dropdown3, setDropdown3] = useState('option1');
  const [dropdown4, setDropdown4] = useState('option1');
  const [dropdown5, setDropdown5] = useState('option1');
  const [dropdown6, setDropdown6] = useState('option1');
  const [dropdown7, setDropdown7] = useState('option1');
  const [dropdown8, setDropdown8] = useState('option1');
  const [dropdown9, setDropdown9] = useState('option1');
  const [dropdown10, setDropdown10] = useState('option1');
  const [dropdown11, setDropdown11] = useState('option1');

  return (
    <View style={{ flex: 1 }}>
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown1}
            onChangeItem={item => setDropdown1(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown2}
            onChangeItem={item => setDropdown2(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown3}
            onChangeItem={item => setDropdown3(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown4}
            onChangeItem={item => setDropdown4(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown5}
            onChangeItem={item => setDropdown5(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown6}
            onChangeItem={item => setDropdown6(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown7}
            onChangeItem={item => setDropdown7(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown8}
            onChangeItem={item => setDropdown8(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown9}
            onChangeItem={item => setDropdown9(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown10}
            onChangeItem={item => setDropdown10(item.value)}
        />
        <DropDownPicker
            items={[
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
            ]}
            defaultValue={dropdown11}
            onChangeItem={item => setDropdown11(item.value)}
        />
    </View>
  );
}

export default FeedScreen;