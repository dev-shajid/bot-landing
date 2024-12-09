"use client";

import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Bot,
  Calendar,
  Database,
  LineChart,
  Share2,
  TrendingUp,
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  icon: React.ReactNode;
  x: number;
  y: number;
};

type Connection = {
  source: string;
  target: string;
};

const nodes: Node[] = [
  {
    id: "1",
    label: "n8n Workflows",
    icon: <Share2 className='w-6 h-6' />,
    x: 100,
    y: 200,
  },
  {
    id: "2",
    label: "Implementation Guides",
    icon: <BookOpen className='w-6 h-6' />,
    x: 300,
    y: 100,
  },
  {
    id: "3",
    label: "New Agents",
    icon: <Bot className='w-6 h-6' />,
    x: 300,
    y: 300,
  },
  {
    id: "4",
    label: "CRM Integration",
    icon: <Database className='w-6 h-6' />,
    x: 500,
    y: 50,
  },
  {
    id: "5",
    label: "Sales Forecasting",
    icon: <LineChart className='w-6 h-6' />,
    x: 500,
    y: 200,
  },
  {
    id: "6",
    label: "Automated Reporting",
    icon: <Calendar className='w-6 h-6' />,
    x: 500,
    y: 350,
  },
  {
    id: "7",
    label: "Business Growth",
    icon: <TrendingUp className='w-6 h-6' />,
    x: 700,
    y: 200,
  },
];

const connections: Connection[] = [
  { source: "1", target: "2" },
  { source: "1", target: "3" },
  { source: "2", target: "4" },
  { source: "2", target: "5" },
  { source: "2", target: "6" },
  { source: "3", target: "4" },
  { source: "3", target: "5" },
  { source: "3", target: "6" },
  { source: "4", target: "7" },
  { source: "5", target: "7" },
  { source: "6", target: "7" },
];

export default function NodeVisualizationCard() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const animationDurationsRef = useRef<number[]>([]);

  useEffect(() => {
    animationDurationsRef.current = connections.map(
      () => Math.random() * 3 + 2,
    );
  }, []);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, []);

  return (
    <div className='w-full max-w-2xl'>
      <div>
        <div className='pb-2 border border-[#5355d1] relative aspect-video w-full overflow-hidden rounded-lg bg-[#0f0f2f]/50'>
          <svg
            className='h-full w-full'
            viewBox='0 0 800 400'
            preserveAspectRatio='xMidYMid meet'
          >
            <defs>
              <filter id='glow'>
                <feGaussianBlur stdDeviation='3.5' result='coloredBlur' />
                <feMerge>
                  <feMergeNode in='coloredBlur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
              <linearGradient id='lineGradient'>
                <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0' />
                <stop offset='50%' stopColor='#8b5cf6' stopOpacity='1' />
                <stop offset='100%' stopColor='#8b5cf6' stopOpacity='0' />
              </linearGradient>
            </defs>
            {connections.map((connection, index) => {
              const source = nodes.find((n) => n.id === connection.source);
              const target = nodes.find((n) => n.id === connection.target);
              if (!source || !target) return null;

              const isHighlighted =
                hoveredNode === connection.source ||
                hoveredNode === connection.target;

              return (
                <g key={`connection-${connection.source}-${connection.target}`}>
                  <line
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={isHighlighted ? "#8b5cf6" : "#4b5563"}
                    strokeWidth={isHighlighted ? 3 : 1}
                    className={`transition-all duration-300 ${
                      isHighlighted ? "opacity-100" : "opacity-50"
                    }`}
                  />
                  <line
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke='url(#lineGradient)'
                    strokeWidth={3}
                    strokeLinecap='round'
                    filter='url(#glow)'
                  >
                    <animate
                      key={`offset-${animationKey}`}
                      attributeName='stroke-dashoffset'
                      from={`${Math.hypot(
                        target.x - source.x,
                        target.y - source.y,
                      )}`}
                      to='0'
                      dur={`${animationDurationsRef.current[index]}s`}
                      repeatCount='indefinite'
                      begin='0s'
                    />
                    <animate
                      key={`array-${animationKey}`}
                      attributeName='stroke-dasharray'
                      values={`0 ${Math.hypot(
                        target.x - source.x,
                        target.y - source.y,
                      )}; ${
                        Math.hypot(target.x - source.x, target.y - source.y) / 3
                      } ${
                        (Math.hypot(target.x - source.x, target.y - source.y) *
                          2) /
                        3
                      }; 0 ${Math.hypot(
                        target.x - source.x,
                        target.y - source.y,
                      )}`}
                      dur={`${animationDurationsRef.current[index]}s`}
                      repeatCount='indefinite'
                      begin='0s'
                    />
                  </line>
                </g>
              );
            })}
            {nodes.map((node) => (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className='cursor-pointer'
              >
                <rect
                  width='80'
                  height='80'
                  x='-40'
                  y='-40'
                  rx='10'
                  fill={hoveredNode === node.id ? "#8b5cf6" : "#1a1a3f"}
                  className='transition-all duration-300'
                  filter={hoveredNode === node.id ? "url(#glow)" : ""}
                />
                <foreignObject x='-30' y='-30' width='60' height='60'>
                  <div className='flex items-center justify-center h-full text-white'>
                    {node.icon}
                  </div>
                </foreignObject>
                <text
                  textAnchor='middle'
                  y='60'
                  fill={hoveredNode === node.id ? "white" : "#9ca3af"}
                  className='text-sm font-light transition-all duration-300'
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
