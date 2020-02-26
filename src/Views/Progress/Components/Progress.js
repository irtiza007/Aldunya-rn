import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
    BarChart,

} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
        {
            data: [1, 2, 3, 0]
        }
    ]
};
const chartConfig = {

    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 67, 104, ${opacity})`,
    strokeWidth: 3,
    // optional, default 3
    barPercentage: 1,
    fillShadowGradient: "rgba(0, 67, 104, 1)",
    fillShadowGradientOpacity: 1,
};
const Progress = () => {
    return (
        <View style={styles.container}>
            <BarChart
                // style={{ backgroundColor: 'white' }}
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel=""
                chartConfig={chartConfig}

                showBarTops={false}
                withInnerLines={false}

            />
            <View style={styles.videoDescription}>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Text style={styles.rowText}>
                            Time
                                </Text>
                    </View>
                    <View style={styles.item2}>
                        <Text style={styles.rowText}>
                            8 min
                                     </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Text style={styles.rowText}>
                            Time
                                </Text>
                    </View>
                    <View style={styles.item2}>
                        <Text style={styles.rowText}>
                            8 min
                                     </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Text style={styles.rowText}>
                            Time
                                </Text>
                    </View>
                    <View style={styles.item2}>
                        <Text style={styles.rowText}>
                            8 min
                                     </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Text style={styles.rowText}>
                            Time
                                </Text>
                    </View>
                    <View style={styles.item2}>
                        <Text style={styles.rowText}>
                            8 min
                                     </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Progress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    chart: {
        width: 200,
        height: 200,
    },
    videoDescription: {
        width: '80%',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    item: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 10
    },
    item2: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    rowText: {
        fontWeight: 'bold',
        fontSize: 20
    },
});