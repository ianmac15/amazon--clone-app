const FetchServer = (entity: ) => {

  const editCar = async (id: number, updBrand: string, updModel: string) => {

    const carToEdit = await fetchCar(id)
    const updCar: carType = { ...carToEdit, brand: updBrand, model: updModel }

    const res = await fetch(`http://localhost:7000/cars/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updCar)
      }
    )

    const data = await res.json()


    setCars(
      cars.map(
        (car) => car.id === id ? { ...car, brand: data.brand, model: data.model } : car
      )
    )

  }

  return (
    <div>FetchServer</div>
  )
}

export default FetchServer