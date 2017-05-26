// import 'es6-promise';

function testAsync() {
  return new Promise(resolve => {
    const list = [];
    const max = 10;
    let i = 0;
    for (i = 0; i < max; i++) {
      list.push({
        img: 'http://a1.vimage1.com/upload/merchandise/1920/LEONIE-0432049-5.jpg',
        id: String(Math.random()).substr(3, 10),
        status: '已完成',
        total: 200 + (Math.random() * 100).toFixed(2),
        dt: new Date().toLocaleDateString(),
      });
    }

    setTimeout(() => {
      resolve(list);
    }, (Math.random() * 500) + 500); // 1-2 seconds delay
  });
}

export default {
  testAsync,
};
