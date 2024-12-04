import {call, put, takeLatest, all} from 'redux-saga/effects';
import axios from "axios";
import {fetchSWDataRequest, fetchSWDataSuccess, fetchSWDataFailure} from '../slice/SWstate.js'

const HOST = 'https://swapi.dev/api/'

