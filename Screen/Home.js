import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../utils'
import { Icon } from 'react-native-elements'

export default function Home({ navigation }) {

    const DataMenu = ({ img, judul, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                backgroundColor: colors.primary,
                borderRadius: 10,
                flex: 1,
                marginHorizontal: 20,
                paddingTop: 20,
            }}>
                <Image source={img} style={{
                    height: '100%',
                    resizeMode: 'contain'
                }} />

            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                height: 100,
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                paddingHorizontal: 20,
                paddingVertical: 10,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={styles.txt}>Welcome</Text>
                    <Text style={styles.txtLogo}>MANAJEMEN ASET</Text>
                    <Text style={styles.txt}>Aplikasi untuk manajemen aset barang</Text>

                </View>

            </View>



            <View style={{
                flex: 1,
                paddingVertical: 100,
                backgroundColor: colors.white,
            }}>


                <DataMenu onPress={() => navigation.navigate('Cek')} judul="Scan Barang dengan Kamera" img={require('../scan.png')} />



            </View>
            <View style={{

                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../logo.png')} style={{
                    width: 100,
                    height: 100,
                }} />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 13,
        color: colors.white,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 14,
        marginBottom: 20,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 27,
        marginBottom: 5,
        color: colors.white,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    }

})