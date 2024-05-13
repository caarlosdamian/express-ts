import { mockResponse, mockResquest } from '../../__mocks__';
import { getUsers } from '../../handlers/user';

describe('getUsers', () => {
  it('should return an array of users', async () => {
    await getUsers(mockResquest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});
