#!/bin/bash
urls=(
    "https://images.unsplash.com/photo-1559599749-6d03aabf04d0?auto=format&fit=crop&w=600&q=80"
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    "https://images.unsplash.com/photo-1581091012184-5a02d8be2c2d?auto=format&fit=crop&w=600&q=80"
    "https://images.unsplash.com/photo-1562322140-8b5d0b9a1c66?auto=format&fit=crop&w=600&q=80"
)

for url in "${urls[@]}"; do
    echo "Testing: $url"
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    echo "Status: $status"
    echo "---"
done
