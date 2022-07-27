import axios from 'axios';
import fs from 'fs';

const path = '../../public/data/wouldyou.json';

async function fetchBackend() {
  let data;
    try {
      await axios({
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

module.exports = { fetchBackend };
