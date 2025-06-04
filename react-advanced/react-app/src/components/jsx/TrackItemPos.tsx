import { useEffect, useState } from 'react';
import MousePosition from '../../types/mousepos';
import { JSX } from 'react/jsx-runtime';

const withMousePosition = (WrappedComponent: React.ComponentType<MouseLoggerProps>) => {
    return (props: JSX.IntrinsicAttributes & MouseLoggerProps) => {
        const [mousePosition, setMousePosition] = useState<MousePosition>({
            x: 0,
            y: 0,
        });

        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            }

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            }
        }, []);

        return <WrappedComponent {...props} mousePosition={mousePosition} />
    }
}

interface MouseLoggerProps {
    mousePosition?: MousePosition
}

const PanelMouseLogger = ({ mousePosition }: MouseLoggerProps) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="row">
                <span>x: {mousePosition.x}</span>
                <span> | y: {mousePosition.y}</span>
            </div>
        </div>
    )
}

const PointMouseLogger = ({ mousePosition }: MouseLoggerProps) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

const TrackItemPos = () => {
    return (
        <div className="contruncontr-container">
            <header className="header">Little Lemon Restaurant 🍕</header>
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>
    )
}

export default TrackItemPos;