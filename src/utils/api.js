const GET = async(BASE_URL, section) => {
    const res = await fetch(`${BASE_URL}${section}`);
    return res.json();
};

export {GET};  