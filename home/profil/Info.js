import React, { Component } from 'react';
import {Button, ScrollView ,View, Text, StyleSheet } from 'react-native';
import Jam from './Jam';
import KuliahPicker from './KuliahPicker';
import Ruangan from './Ruangan';

class Info extends Component {
    constructor(props){
        super(props);
        console.log(props,"Info");
    }

    hourSelected(value,index){
        let time = this.props.time.split(":");
        time[0] = value.toString();
        time = time.join(":");
        console.log(time);
        this.props.collection.changeTime(time);
    }

    minuteSelected(value,index){
        let time = this.props.time.split(":");
        time[1] = value.toString();
        time = time.join(":");
        console.log(time);
        this.props.collection.changeTime(time);
    }

    render(){
        let isEdit = true;
        let hour = this.props.time.split(":");
        return (
            <View style={{ flex: 1,padding: 10, backgroundColor:"#fff" }} >
                <ScrollView>
                <KuliahPicker isEdit={isEdit} matkul={this.props.matkul} />
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>Dosen </Text>
                        <Text style={{ flex: 1,}} >{this.props.dosen}</Text>
                    </View>
                </View>
                <Jam menit={{selectedValue : hour[1],onValueChange : this.minuteSelected.bind(this)}} jam={{selectedValue : hour[0],onValueChange : this.hourSelected.bind(this)}} />
                <Ruangan onChangeText={this.props.collection.onChangeText} value={this.props.room} />
                <Button 
                    onPress={() => {
                            this.props.collection.save();        
                        
                    } } 
                    title="Simpan" 
                />
                </ScrollView>
            </View>
        )
    }
}

export default Info;