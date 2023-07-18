import { v4 } from "uuid";

export const SELECT_OPTIONS = {
    TYPE: [
        {
            id: v4(),
            VALUE: 'personal',
            TEXT: 'Personal',
            SELECTED: true
        },
        {
            id: v4(),
            VALUE: 'work',
            TEXT: 'Work',
            SELECTED: undefined
        },
    ],
    PRIORITY: [
        {
            id: v4(),
            VALUE: '1',
            TEXT: 'Low',
            SELECTED: true
        },
        {
            id: v4(),
            VALUE: '2',
            TEXT: 'Medium',
            SELECTED: undefined
        },
        {
            id: v4(),
            VALUE: '3',
            TEXT: 'High',
            SELECTED: undefined
        },
        {
            id: v4(),
            VALUE: '4',
            TEXT: 'Very High',
            SELECTED: undefined
        },


    ]
}