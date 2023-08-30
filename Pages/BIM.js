import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    AsyncStorage,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
export default class page6 extends React.Component {
    constructor() {
        super();
        this.state = {
            height: "",
            edit: true,
            weight: 20,
            age: 1,
            gender: '',
            result: 0,
            health: ''
        };
    }

    P_Weight() {
        let weight = this.state.weight + 1
        this.setState({ weight: weight })

    }

    long_P_Weight() {
        let weight = this.state.weight + 10
        this.setState({ weight: weight })

    }
    m_Weight() {
        let weight = this.state.weight - 1
        this.setState({ weight: weight })

    }

    long_m_Weight() {
        let weight = this.state.weight - 10
        if (weight > 10) {
            this.setState({ weight: weight })
        }


    }


    plus_age() {
        let age = this.state.age + 1
        this.setState({ age })

    }

    long_plus_age() {
        let age = this.state.age + 10
        this.setState({ age })
    }
    min_age() {
        let age = this.state.age - 1
        if (age > 1) {
            this.setState({ age })
        }

    }

    long_min_age() {
        let age = this.state.age - 10
        if (age > 0) {
            this.setState({ age })
        }


    }

    Bmi() {
        let weight = this.state.weight
        let height = this.state.height
        let result = this.state.result
        result = weight / Math.pow((height / 100), 2)
        if (result > 25 && result < 30) {
            this.setState({ health: "Over Weight" })
        }
        else if (result > 18.5 && result < 24.9) {
            this.setState({ health: "Normal" })
        }
        else {
            this.setState({ health: "Thin" })
        }

        result=Math.round(result * 10) / 10
        this.setState({ result:result })
    }


    render() {
        return (
            <>
                {this.state.edit ?
                    (
                        <View style={{ flex: 1, backgroundColor: '#333638' }}>

                            <View style={{
                                width: '100%',
                                height: 40,
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderColor: '#0d0e0e',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    color: "#fff",
                                    //fontSize: 20,
                                    fontWeight: '800',
                                    //backgroundColor:'#f00'
                                }}
                                >
                                    BIM CALCULATOR
                                </Text>

                            </View>
                            <View style={{ width: '100%', height: 100, flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{
                                    height: '100%',
                                    width: '45%',
                                    backgroundColor: this.state.gender == 'Male' ? "#8bc187" : '#1d1e1ecc',
                                    marginLeft: 5,
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({ gender: 'Male' })
                                    }}
                                >

                                    <Icon name='mars' size={50} color='#fff' style={{ fontWeight: "600" }} />
                                    <Text style={{ color: '#5f626452', marginTop: 5, fontWeight: '600' }}>MALE</Text>

                                </TouchableOpacity>



                                <TouchableOpacity style={{
                                    height: '100%',
                                    width: '45%',
                                    backgroundColor: this.state.gender == 'Female' ? "#8bc187" : '#1d1e1ecc',
                                    marginRight: 5,
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onPress={() => {
                                        this.setState({ gender: 'Female' })
                                    }}
                                >

                                    <Icon name='venus' size={50} color='#fff' style={{ fontWeight: "600" }} />
                                    <Text style={{ color: '#5f626452', marginTop: 5, fontWeight: '600' }}>FEMALE</Text>

                                </TouchableOpacity>

                            </View>

                            <View style={{
                                width: '96%',
                                height: 120,
                                marginTop: 10,
                                borderRadius: 14,
                                backgroundColor: '#1d1e1ecc',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>

                                <Text style={{ fontSize: 24, color: '#5f626452' }}>Height</Text>

                                <TextInput
                                    placeholder='....'
                                    placeholderTextColor={"#5f626452"}
                                    style={{
                                        width: '90%',
                                        height: 60,
                                        //borderWidth: 2,
                                        alignSelf: 'center',
                                        textAlign: 'center',
                                        color: '#fff',
                                        fontSize: 35,
                                        fontWeight: '800',

                                    }}

                                    value={this.state.height}
                                    onChangeText={(value) => {
                                        //value=parseInt(value)
                                        this.setState({ height: value*1 })
                                    }}

                                />

                                <View style={{ height: 4, width: '80%', backgroundColor: '#fff' }}>
                                    {this.state.height<=1 ?
                                        null :
                                        <View style={{
                                            height: "100%", 
                                            width:this.state.height,
                                            //width:this.state.height<20 ? 10:(this.state.height<80 ?50:(this.state.height<100 ?80:(this.state.height<160?140:180))), 
                                            backgroundColor: '#0f0', 
                                            borderRadius: 10 
                                        }}></View>

                                    }
                                </View>



                            </View>

                            <View style={{ width: '100%', height: 120, flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>

                                <View style={{
                                    height: '100%',
                                    width: '45%',
                                    backgroundColor: '#1d1e1ecc',
                                    marginLeft: 5,
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>

                                    <Text style={{ color: '#5f626452', marginTop: 5, fontWeight: '600', fontSize: 24 }}>WEIGHT</Text>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 30,
                                        fontWeight: '800',
                                    }}>
                                        {this.state.weight}
                                    </Text>

                                    <View style={{ flexDirection: 'row', width: '80%', height: 50, justifyContent: 'space-around' }}>
                                        <TouchableOpacity
                                            style={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: 18,
                                                backgroundColor: '#66768152',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onPress={() => {
                                                this.P_Weight()
                                            }}
                                            onLongPress={() => {
                                                this.long_P_Weight()
                                            }}
                                        >
                                            <Icon name='plus' size={22} color="#fff" />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: 18,
                                                backgroundColor: '#66768152',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onPress={() => {
                                                this.m_Weight()
                                            }}
                                            onLongPress={() => {
                                                this.long_m_Weight()
                                            }}
                                        >
                                            <Icon name='minus' size={22} color="#fff" />
                                        </TouchableOpacity>



                                    </View>


                                </View>



                                <View style={{
                                    height: '100%',
                                    width: '45%',
                                    backgroundColor: '#1d1e1ecc',
                                    marginLeft: 5,
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>

                                    <Text style={{ color: '#5f626452', marginTop: 5, fontWeight: '600', fontSize: 24 }}>Age</Text>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 30,
                                        fontWeight: '800',
                                    }}>
                                        {this.state.age}
                                    </Text>

                                    <View style={{ flexDirection: 'row', width: '80%', height: 50, justifyContent: 'space-around' }}>
                                        <TouchableOpacity
                                            style={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: 18,
                                                backgroundColor: '#66768152',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onPress={() => {
                                                this.plus_age()
                                            }}
                                            onLongPress={() => {
                                                this.long_plus_age()
                                            }}

                                        >
                                            <Icon name='plus' size={22} color="#fff" />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: 18,
                                                backgroundColor: '#66768152',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onPress={() => {
                                                this.min_age()
                                            }}
                                            onLongPress={() => {
                                                this.long_min_age()
                                            }}
                                        >
                                            <Icon name='minus' size={22} color="#fff" />
                                        </TouchableOpacity>



                                    </View>


                                </View>

                            </View>

                            <TouchableOpacity style={{
                                width: '98%',
                                height: 50,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#8bc187',
                                marginTop: 50,
                                alignSelf: 'center'
                            }}
                                onPress={() => {
                                    this.setState({ edit: false })
                                    this.Bmi()
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: '800', }}>CALCULATE</Text>
                            </TouchableOpacity>



                        </View>
                    ) :
                    (
                        <View style={{ flex: 1, backgroundColor: '#333638' }}>

                            <View style={{
                                width: '100%',
                                height: 40,
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderColor: '#0d0e0e',
                                // justifyContent: 'center',
                                flexDirection: 'row'
                            }}>
                                <Icon name='angle-left' size={20} style={{ marginLeft: 15 }} />
                                <Text style={{
                                    color: "#fff",
                                    marginLeft: 60,
                                    fontWeight: '800',
                                }}
                                >
                                    BIM CALCULATOR
                                </Text>

                            </View>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 28, fontWeight: '700', marginTop: 15 }}>Your Result</Text>

                            <View style={{
                                height: '60%',
                                width: '98%',
                                backgroundColor: '#1d1e1ecc',
                                borderRadius: 20,
                                alignSelf: 'center',
                                alignItems: 'center',
                                marginTop: 20
                            }}>
                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: '800',marginTop:15 }}>gender:{this.state.gender}</Text>
                                <View style={{ width: "99%", height: 2, marginTop: 15, backgroundColor: '#5b5e57' }}></View>

                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: '800' , marginTop: 20}}>Result:{this.state.result}</Text>
                                <View style={{ width: "99%", height: 2, marginTop: 20, backgroundColor: '#333638' }}></View>

                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: '800' , marginTop: 20}}>healthiness:{this.state.health}</Text>
                                <View style={{ width: "99%", height: 2, marginTop: 20, backgroundColor: '#333638' }}></View>

                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: '800' , marginTop: 10}}>Age:{this.state.age}</Text>
                                <View style={{ width: "99%", height: 2, marginTop: 20, backgroundColor: '#333638' }}></View>





                            </View>





                            <TouchableOpacity style={{
                                width: '100%',
                                height: 50,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#8bc187',
                                marginTop: 36,
                            }}
                                onPress={() => {
                                    this.setState({ 
                                        height: "",
                                        edit: true,
                                        weight: 20,
                                        age: 1,
                                        gender: '',
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: '800' }}>RECALCULATE</Text>
                            </TouchableOpacity>



                        </View>
                    )
                }
            </>
        );
    }
}