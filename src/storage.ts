// type IStorage = {
//     count: number;
// };

// const defaultStorage: IStorage = {
//     count: 0,
// };

// export const storage = {
//     get: (): Promise<IStorage> =>
//         chrome.storage.sync.get(defaultStorage) as Promise<IStorage>,
//     set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
// };



type IStorage = {
  selected: string;
}


const defaultSel: IStorage = {
  selected: "",
};


export const storage = {
  get: (): Promise<IStorage> =>
    chrome.storage.sync.get(defaultSel) as Promise<IStorage>,
  set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
};
