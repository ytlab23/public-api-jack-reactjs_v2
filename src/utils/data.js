const cats = [
  [ 36, 'Analytics', 'f201' ],
  [ 22, 'Animals', 'f1b0' ],
  [ 29, 'Anime', 'f26c' ],
  [ 37, 'Anti-Malware', 'f717' ],
  [ 34, 'Art & Design', 'f53f' ],
  [ 26, 'Automation', 'f118' ],
  [ 40, 'Books', 'f518' ],
  [ 43, 'Business', 'f64a' ],
  [ 30, 'Calendar', 'f133' ],
  [ 25, 'Cloud Storage & File Sharing', 'f0ee' ],
  [ 6, 'Currency Echange', 'f51e' ],
  [ 4, 'Data Access', 'f1c0' ],
  [ 23, 'Data Validation', 'f00c' ],
  [ 2, 'Development', 'f120' ],
  [ 38, 'Dictionaries', 'f02d' ],
  [ 17, 'Documents & Productivity', 'f058' ],
  [ 41, 'Environment', 'e587' ],
  [ 11, 'Finance', 'f555' ],
  [ 15, 'Food & Drink', 'f805' ],
  [ 8, 'Games & Comics', 'f11b' ],
  [ 5, 'Geocoding', 'f277' ],
  [ 20, 'Government', 'f19c' ],
  [ 19, 'Health', 'f479' ],
  [ 42, 'IoT', 'f6ff' ],
  [ 12, 'Jobs', 'f0f2' ],
  [ 18, 'Machine Learning', 'f544' ],
  [ 31, 'Marketing', 'f140' ],
  [ 9, 'Media', 'f07c' ],
  [ 13, 'Music', 'f001' ],
  [ 32, 'News', 'f1ea' ],
  [ 3, 'Open Data', 'f57d' ],
  [ 27, 'Personality', 'f0c0' ],
  [ 24, 'Photography', 'f083' ],
  [ 10, 'Science', 'f492' ],
  [ 28, 'Security', 'f3ed' ],
  [ 21, 'Shopping', 'f07a' ],
  [ 7, 'Social', '40' ],
  [ 14, 'Sport & Fitness', 'f70c' ],
  [ 46, 'Sports & Fitness', 'f84a' ],
  [ 33, 'Text Analysis', 'e098' ],
  [ 1, 'Transportation', 'f0d1' ],
  [ 35, 'URL Shorteners', 'f0c1' ],
  [ 39, 'Vehicle', 'f1b9' ],
  [ 47, 'Video', 'f03d' ],
  [ 16, 'Weather', 'f76c' ]
]
// 
const stat = [{category:'home'}]
for(let i in cats){
  const v = cats[i]
  stat.push({
    category: v[1].toLowerCase().replace(/ /g, "_")
  })
}
// 
export {
    cats,
    stat
}