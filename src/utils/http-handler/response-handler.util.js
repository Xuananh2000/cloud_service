function HandleResponse(response) {
    const { data } = response;
    return data.data ?? {};
}

export {
    HandleResponse
}
