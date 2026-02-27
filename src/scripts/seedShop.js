import supabase from "../config/supabase.js";
import shopsJson from '../mock_data.json' with {type: 'json'}
import { loadEnvFile } from 'node:process';

loadEnvFile();

// const shopsData = JSON.parse(fs.readFileSync('./src/data/shops.json', 'utf-8'));

const seedShops = async () => {
    try {
        const { data, error } = await supabase.from('shops').insert(shopsJson);
        if (error) {
            console.error(`Error inserting data: ${error.message}`)
        } else {
            console.log('Insert successful.')
        }
    } catch (er) {
        console.error(`Error: ${er}`)
    }
}

seedShops();