function MyDevice({mydata}) {
    return (
        <div>
            {
                mydata.myDeviceData.map((item, index) => (
                    <div key={index}>
                        <div>{item.name}</div>
                        <div>RAM: {item.RAM}</div>
                        <div>HomeButton: {item.HomeButton}</div>
                        <div>TouchID: {item.TouchID}</div>
                        <div>FaceID: {item.FaceID}</div>
                        <br/>
                    </div>
                ))
            }
        </div>
    )
}

export default MyDevice;