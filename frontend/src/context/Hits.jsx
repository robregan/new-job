import { createContext, useContext, useReducer } from 'react';

const HitsContext = createContext(null);
const HitsDispatchContext = createContext(null);

export function HitsProvider({ children }) {
  const [hits, dispatch] = useReducer(
    hitsReducer,
    initialHits
  );

  return (
    <HitsContext.Provider value={hits}>
      <HitsDispatchContext.Provider
        value={dispatch}
      >
        {children}
      </HitsDispatchContext.Provider>
    </HitsContext.Provider>
  );
}

export function useHits() {
  return useContext(HitsContext);
}

export function useHitsDispatch() {
  return useContext(HitsDispatchContext);
}

function hitsReducer(hits, action) {
  switch (action.type) {
    case 'addHit': {
      return [...hits, {
        companyName: action.newHit.companyName,
        contactEmail: action.newHit.contactEmail,
        jobTitle: action.newHit.jobTitle,
        companySite: action.newHit.companySite,
        appliedYes: action.newHit.appliedYes
      }];
    }
    // case 'changed': {
    //   return hits.map(t => {
    //     if (t.id === action.task.id) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    // case 'deleted': {
    //   return hits.filter(t => t.id !== action.id);
    // }
    default: {
     return hits
    }
   
  }
}

const initialHits = [];
