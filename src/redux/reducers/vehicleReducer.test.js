import { vehicleReducer } from "./vehicleReducer";

describe ('vehicleReducer', () => {
    test('returns new state after vehicle created', () => {
        const state = [
            { id: '1',
            orderNumber:'1',
            frame:'32dn2w9023j23',
            model: 'audi a5',
            numberPlate:'832djz',
            deliverDate: 20200101
        }
    ]

    const action = {
       type: '@vehicles/created', 
       payload: {
        id: '2',
        orderNumber:'2',
        frame:'8328732320efdu',
        model: 'audi a1',
        numberPlate:'3084asd',
        deliverDate: 20200202
       }
    }

    const newState = vehicleReducer(state, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(state[0])
    expect(newState).toContainEqual({
        id: '2',
        orderNumber:'2',
        frame:'8328732320efdu',
        model: 'audi a1',
        numberPlate:'3084asd',
        deliverDate: 20200202
    })

    })
})