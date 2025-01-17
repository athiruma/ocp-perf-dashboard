import {createSlice, original} from "@reduxjs/toolkit";
import {OCP_INITIAL_DATA} from "./InitialData";
import { getOCPUpdatedData, getOCPSummary } from './Utils';


const jobsSlice = createSlice({
    initialState: {
        ...OCP_INITIAL_DATA,
    },
    name: 'ocpES',
    reducers: {
        getOCPJobsData: (state, action) => {
            state.initialState = false
            state.copyData = action.payload.data
            state.data = action.payload.data
            state.benchmarks = ["All", ...action.payload.benchmarks]
            state.versions = ["All", ...action.payload.versions]
            state.waitForUpdate = action.payload.waitForUpdate
            state.platforms = ["All", ...action.payload.platforms]
            state.workers = ["All", ...action.payload.workers]
            state.networkTypes = ["All", ...action.payload.networkTypes]
            state.ciSystems = ["All", ...action.payload.ciSystems]
            state.jobTypes = ["All", ...action.payload.jobTypes]
            state.rehearses = ["All", ...action.payload.rehearses]
            state.updatedTime = action.payload.updatedTime
            state.error = null
            Object.assign(state,  getOCPSummary(state.data))
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
        },
        updateOCPDataFilter: (state, action) => {
            const {ciSystem, platform, benchmark, version, workerCount, networkType, jobType, isRehearse} = action.payload
            state.selectedBenchmark = benchmark
            state.selectedVersion = version
            state.selectedPlatform = platform
            state.selectedNetworkType = networkType
            state.selectedWorkerCount = workerCount
            state.selectedCiSystem = ciSystem
            state.selectedJobType = jobType
            state.selectedRehearse = isRehearse
            state.data = getOCPUpdatedData(original(state.copyData), platform, benchmark, version, workerCount, networkType, ciSystem, jobType, isRehearse)
            Object.assign(state,  getOCPSummary(state.data))
        },
        updateOCPMetaData: (state, action) => {
            state.data = getOCPUpdatedData(action.payload.data, state.selectedPlatform, state.selectedBenchmark,
                state.selectedVersion, state.selectedWorkerCount, state.selectedNetworkType, state.selectedCiSystem,
                state.selectedJobType, state.selectedRehearse)
            Object.assign(state,  getOCPSummary(state.data))
        },
        setWaitForOCPUpdate: (state, action) => {
            state.waitForUpdate = action.payload.waitForUpdate
        },
        errorOCPCall: (state, action) => {
            state.error = action.payload.error
        }
    }
})
export const {
    getOCPJobsData,
    updateOCPDataFilter,
    updateOCPMetaData,
    setWaitForOCPUpdate,
    errorOCPCall,
} = jobsSlice.actions
export default jobsSlice.reducer
