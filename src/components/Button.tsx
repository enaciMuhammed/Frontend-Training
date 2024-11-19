function Button ({btnText, btnColor, onClick}: any) {
    return (
        <button  className="btn" style={{backgroundColor: btnColor}} onClick={onClick}>{btnText}</button>
    );
}

export default Button;