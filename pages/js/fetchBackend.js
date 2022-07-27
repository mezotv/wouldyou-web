import axios from 'axios';
import fs from 'fs';

const path = '../../public/data/wouldyou.json';

const fetchBackend = (props) => {
  let data;
    try {
       axios({
        method: 'post',
        url: 'https://developersdungeon.xyz/assets/json/servers.json',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => {
            data = JSON.stringify(res.data, null, 2);
          fs.writeFile(path, data, (err) => {
            if (err) throw err;
          });
        })
        .catch(() => {
        });
    } catch (err) {}
}

export default fetchBackend;
