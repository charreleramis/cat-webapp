import { useEffect, useState } from 'react';
import Api from './Api';

const Method = () => {

    // const add_card = async (card_name) => {
    //     try{
    //         const result = await Api.post('add-card', { card_name })
    //         return result
    //     } catch(error){
    //         console.error('Error: ', error);
    //         return false
    //     }
    // }

    const get_cards = async () => {
        try{
            const result = await Api.get('get-cards');
            return result.data;
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }

    const update_card = async (id, card_name) => {
        try{ 
            const result = await Api.post('update-card', { id, card_name });
            return result.data;
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }

    const delete_card = async (id) => {
        try{ 
            const result = await Api.post('delete-card', { id });
            return result.data;
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }


    return {
        // add_card,
        get_cards,
        // delete_card,
        update_card
    }
}

export default Method;