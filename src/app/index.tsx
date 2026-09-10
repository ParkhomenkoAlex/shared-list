import Constants from 'expo-constants';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { supabase } from '@/lib/supabase';

const appEnv = Constants.expoConfig?.extra?.appEnv ?? 'Unknown';

export default function HomeScreen() {
    useEffect(() => {
        const testSupabaseConnection = async () => {
            const { data, error } = await supabase
                .from('lists')
                .select('*');

            console.log('Supabase data:', data);
            console.log('Supabase error:', error);
        };

        testSupabaseConnection();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Shopping List {appEnv}
            </Text>

            <Text>Our app starts here.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 8,
    },
});