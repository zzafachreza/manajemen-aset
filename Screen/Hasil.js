import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils';
import { colors } from 'react-native-elements';

export default function Hasil({ navigation, route }) {
    const item = route.params;
    console.log(item);
    return (
        <View style={{
            padding: 10,
            flex: 1,
            justifyContent: 'center'
        }}>
            <View style={styles.box}>
                <Text style={styles.title}>Nama Barang</Text>
                <Text style={styles.desc}>{item.nama_barang}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Merek Barang</Text>
                <Text style={styles.desc}>{item.merek_barang}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Tipe Barang</Text>
                <Text style={styles.desc}>{item.tipe_barang}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Nomor Serial Barang</Text>
                <Text style={styles.desc}>{item.nomor_serial}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Nomor FPBJ</Text>
                <Text style={styles.desc}>{item.nomor_fpbj}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Nomor Invoice</Text>
                <Text style={styles.desc}>{item.nomor_invoice}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Tanggal Pembelian</Text>
                <Text style={styles.desc}>{item.tanggal_pembelian}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Nama Penanggung Jawab</Text>
                <Text style={styles.desc}>{item.penanggung_jawab}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>NIK</Text>
                <Text style={styles.desc}>{item.nik}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.secondary[600],
        fontSize: 15,
    },
    desc: {
        fontFamily: fonts.secondary[400],
        fontSize: 15,
    },
    box: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingVertical: 10,
    }
})