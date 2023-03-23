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

interface tags {
  id: number;
  legendName: string;
  color: string;
}
