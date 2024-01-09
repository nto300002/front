type Test = {
  id: number;
  title: string;
};

const fetchTests = async (): Promise<Test[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tests`);
    if (!response.ok) {
      throw new Error('データの取得に失敗しました');
    }
    const data: Test[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchTests };
