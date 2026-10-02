/*
  Product data layer
  ------------------
  Keep products here during the static phase.
  Later replace this file/data source with:
  GET /api/products.php
  POST /api/products.php
  and a MySQL products table.
*/
const products = [
  {id:1, category:"steel", name:"حديد إنشائي", tag:"حديد", icon:"▰", description:"منتجات حديدية للاستخدامات الإنشائية والمشاريع حسب المواصفات المطلوبة."},
  {id:2, category:"sheet", name:"صاج أسود", tag:"صاج", icon:"▤", description:"صاج للاستخدامات الصناعية والإنشائية، مع خيارات متعددة للمقاسات والسماكات."},
  {id:3, category:"zinc", name:"صاج زنك", tag:"زنك", icon:"⌁", description:"ألواح زنك مناسبة للتغطيات والأسقف والاستخدامات المختلفة."},
  {id:4, category:"steel", name:"قطاعات حديدية", tag:"حديد", icon:"╋", description:"حلول معدنية للمشاريع والهياكل مع إمكانية تجهيز المقاسات حسب الطلب."},
  {id:5, category:"sheet", name:"صاج مموج", tag:"صاج", icon:"≈", description:"صاج مموج للتغطيات والاستخدامات العملية في المشاريع والمنشآت."},
  {id:6, category:"zinc", name:"زنك للتغطيات", tag:"زنك", icon:"▱", description:"ألواح زنك للتغطية والحماية، قابلة للطلب بالكميات والمواصفات المطلوبة."}
];
