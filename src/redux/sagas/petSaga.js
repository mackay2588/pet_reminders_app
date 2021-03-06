import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

//function to post new pets
function* postPet(action) {
    console.log('postPet', action);

    try {
        yield call(axios.post, '/api/addPet', action.payload);
    }
    catch (error) {
        console.log('error adding pet:', error);
        alert('error adding pet');
    }
} //end postPet

//function to get pets back from database for specific owner
function* getOwnerPets(action) {
    console.log('getOwnerPets', action);

    try {
        const petResponse = yield call(axios.get, '/api/getPets/owner/' + action.payload);
        console.log('petResponse', petResponse);

        const responseAction = { type: 'SET_PETS', payload: petResponse.data }

        yield put(responseAction);
    }
    catch (error) {
        console.log('error getting pets for owner:', error);
    }
} //end getOwnerPets

//function to get one specific pet info
function* getOnePet(action) {
    console.log('get one pet', action);

    try {
        const petResponse = yield call(axios.get, '/api/getPets/pet/' + action.payload);
        console.log('petResponse', petResponse);

        const responseAction = { type: 'SET_ONE_PET', payload: petResponse.data }

        yield put(responseAction);
    }
    catch (error) {
        console.log('error getting one pet by id', error);
        alert('error getting pet by id');
    }
} //end getOnePet

//function to update pet info
function* updatePetInfo(action) {
    console.log('update pet info', action);

    try {
        yield call(axios.put, 'api/updatePet', action.payload);
    }
    catch (error) {
        console.log('error updating pet info:', error);
        alert('error updating pet info');
    }
}//end updatePetInfo

export default function* petSaga() {

    yield takeLatest('ADD_PET', postPet);
    yield takeLatest('GET_OWNER_PETS', getOwnerPets);
    yield takeLatest('GET_ONE_PET', getOnePet);
    yield takeLatest('UPDATE_PET_INFO', updatePetInfo);
}