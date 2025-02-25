import { JSX, useEffect, useState } from "react";
import MousePosition from "../../types/mousepos";
import "../../css/rendermouseprops.css";

interface MousePositionProps {
    render: (mousePosition: MousePosition) => JSX.Element;
}

const MousePositionListener = ({ render }: MousePositionProps) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMousePositionChange = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            return mousePosition;
        }

        window.addEventListener("mousemove", handleMousePositionChange);

        return () => {
            window.removeEventListener("mousemove", handleMousePositionChange);
        };
    }, [])

    return render(mousePosition);
}

const PanelMouseLogger = () => {
    return (
        <MousePositionListener render={(mousePosition: MousePosition) =>
            <div className="BasicTracker">
                <p>Mouse position:</p>
                <div className="Row">
                    <span>x: {mousePosition.x}</span>
                    <span>y: {mousePosition.y}</span>
                </div>
            </div>
        } />
    )
}

const PointMouseLogger = () => {
    return (
        <MousePositionListener render={(mousePosition: MousePosition) =>
            <p>({mousePosition.x}, {mousePosition.y})</p>
        } />
    )
}

const RenderMousePos = () => {
    return (
        <div className="contruncontr-container">
            <header className="Header">Little Lemon Restaurant 🍕</header>
            <PanelMouseLogger />
            <PointMouseLogger />
        </div>
    )
}

export default RenderMousePos;