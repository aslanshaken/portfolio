//
export const getMockTypeData = (data = []) => {
  return data.map((d, _i) => ({
    _id: _i,
    ...d,
  }));
};
