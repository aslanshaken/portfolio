//
export const getMockTypeData = (data = []) => data.map((d, _i) => ({
    _id: _i,
    ...d,
  }));
