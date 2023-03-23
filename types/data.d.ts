interface category {
  id: number;
  categoryName: string;
  legend: string;
}

interface fabricData {
  categoryId: number;
  color: string;
  createdAt: number;
  id: number;
  location: string;
  lot: string;
  photoPath: string;
  quantity: string;
  remark: string;
  updatedAt: number;
}

<<<<<<< HEAD
interface tags {
  id: number;
  legendName: string;
  color: string;
=======
interface colorTable {
  expose: boolean;
  id: number;
  photoPath: string;
  remark: string;
>>>>>>> eee713473aca84b1c1fe9988c9b52685f88a7e4f
}
