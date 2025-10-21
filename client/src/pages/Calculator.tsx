import { useState } from "react";
import { Calculator, Sun, Zap, IndianRupee, Leaf, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Link } from "wouter";

export default function SolarCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState<number>(5000);
  const [rooftopArea, setRooftopArea] = useState<number>(500);
  const [location, setLocation] = useState<string>("mumbai");
  const [propertyType, setPropertyType] = useState<string>("residential");
  const [results, setResults] = useState<any>(null);

  const locations = [
    { value: "mumbai", label: "Mumbai, Maharashtra", sunlight: 5.5 },
    { value: "delhi", label: "Delhi NCR", sunlight: 5.2 },
    { value: "bangalore", label: "Bangalore, Karnataka", sunlight: 5.8 },
    { value: "pune", label: "Pune, Maharashtra", sunlight: 5.6 },
    { value: "hyderabad", label: "Hyderabad, Telangana", sunlight: 5.7 },
    { value: "ahmedabad", label: "Ahmedabad, Gujarat", sunlight: 6.2 },
    { value: "chennai", label: "Chennai, Tamil Nadu", sunlight: 5.4 },
    { value: "kolkata", label: "Kolkata, West Bengal", sunlight: 4.8 },
    { value: "agra", label: "Agra, Uttar Pradesh", sunlight: 5.5 },
    { value: "firozabad", label: "Firozabad, Uttar Pradesh", sunlight: 5.4 },
    { value: "lucknow", label: "Lucknow, Uttar Pradesh", sunlight: 5.3 },
    { value: "mathura", label: "Mathura, Uttar Pradesh", sunlight: 5.5 },
    { value: "aligarh", label: "Aligarh, Uttar Pradesh", sunlight: 5.4 },
    { value: "fatehabad", label: "Fatehabad, Haryana", sunlight: 5.6 },
    { value: "dholpur", label: "Dholpur, Rajasthan", sunlight: 5.7 },
    { value: "hathras", label: "Hathras, Uttar Pradesh", sunlight: 5.4 }
  ];

  const propertyTypes = [
    { value: "residential", label: "Residential", costPerKw: 60000 },
    { value: "commercial", label: "Commercial", costPerKw: 55000 },
    { value: "industrial", label: "Industrial", costPerKw: 50000 }
  ];

  const calculateSavings = () => {
    const selectedLocation = locations.find(loc => loc.value === location);
    const selectedPropertyType = propertyTypes.find(prop => prop.value === propertyType);
    
    if (!selectedLocation || !selectedPropertyType) return;

    // Calculate system size needed (kW)
    const dailyConsumption = (monthlyBill * 12) / (365 * 6); // Assuming ₹6 per unit
    const systemSizeKw = dailyConsumption / selectedLocation.sunlight;
    
    // Check if rooftop area is sufficient (1 kW needs ~100 sq ft)
    const areaNeeded = systemSizeKw * 100;
    const maxSystemSize = rooftopArea / 100;
    const recommendedSystemSize = Math.min(systemSizeKw, maxSystemSize);
    
    // Calculate costs and savings
    const systemCost = recommendedSystemSize * selectedPropertyType.costPerKw;
    // Government subsidy: ₹90,000 for 1-2kW, ₹1,08,000 for 3kW and above
    let subsidyAmount = 0;
    if (propertyType === 'residential') {
      if (recommendedSystemSize >= 3) {
        subsidyAmount = 108000;
      } else if (recommendedSystemSize >= 1) {
        subsidyAmount = 90000;
      }
    }
    const netCost = systemCost - subsidyAmount;
    
    // Annual savings
    const annualGeneration = recommendedSystemSize * selectedLocation.sunlight * 365;
    const annualSavings = annualGeneration * 6; // ₹6 per unit saved
    
    // Payback period
    const paybackYears = netCost / annualSavings;
    
    // 25-year savings
    const totalSavings = annualSavings * 25 - netCost;
    
    // CO2 savings (0.82 kg CO2 per kWh)
    const annualCO2Savings = annualGeneration * 0.82;
    const totalCO2Savings = annualCO2Savings * 25;

    setResults({
      systemSize: recommendedSystemSize,
      systemCost,
      subsidyAmount: subsidyAmount,
      netCost,
      annualSavings,
      paybackYears,
      totalSavings,
      annualGeneration,
      annualCO2Savings,
      totalCO2Savings,
      areaNeeded,
      areaSufficient: rooftopArea >= areaNeeded
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-950/20 dark:to-yellow-950/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707882-a5bac6861d75')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 text-sm">Solar Calculator</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
              Calculate Your Solar Savings
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how much you can save with solar energy. Get instant estimates 
              for system size, costs, and potential savings.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calculator className="w-8 h-8 text-primary" />
                  Solar Calculator
                </CardTitle>
                <CardDescription>
                  Enter your details to get personalized solar savings estimates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="monthly-bill" className="text-base font-semibold">
                    Monthly Electricity Bill (₹)
                  </Label>
                  <div className="space-y-2">
                    <Slider
                      value={[monthlyBill]}
                      onValueChange={(value) => setMonthlyBill(value[0])}
                      max={20000}
                      min={1000}
                      step={500}
                      className="w-full"
                    />
                    <Input
                      id="monthly-bill"
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      placeholder="5000"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="rooftop-area" className="text-base font-semibold">
                    Available Rooftop Area (sq ft)
                  </Label>
                  <div className="space-y-2">
                    <Slider
                      value={[rooftopArea]}
                      onValueChange={(value) => setRooftopArea(value[0])}
                      max={2000}
                      min={200}
                      step={50}
                      className="w-full"
                    />
                    <Input
                      id="rooftop-area"
                      type="number"
                      value={rooftopArea}
                      onChange={(e) => setRooftopArea(Number(e.target.value))}
                      placeholder="500"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc.value} value={loc.value}>
                          {loc.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Property Type</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateSavings} 
                  className="w-full bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700"
                  size="lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Savings
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <div className="space-y-6">
                {!results.areaSufficient && (
                  <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20">
                    <CardHeader>
                      <CardTitle className="text-orange-800 dark:text-orange-200">
                        ⚠️ Rooftop Area Warning
                      </CardTitle>
                      <CardDescription className="text-orange-700 dark:text-orange-300">
                        Your available rooftop area ({rooftopArea} sq ft) may not be sufficient for the optimal system size ({Math.ceil(results.areaNeeded)} sq ft needed). Results are adjusted for available space.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )}

                <Card className="shadow-lg border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-green-600">
                      <Sun className="w-8 h-8" />
                      Your Solar System
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {results.systemSize.toFixed(1)} kW
                      </div>
                      <p className="text-muted-foreground">Recommended System Size</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {results.annualGeneration.toLocaleString()} kWh
                      </div>
                      <p className="text-muted-foreground">Annual Energy Generation</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <IndianRupee className="w-8 h-8 text-green-600" />
                      Financial Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="text-2xl font-bold mb-1">
                          ₹{results.systemCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Total System Cost</p>
                      </div>
                      {results.subsidyAmount > 0 && (
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            -₹{results.subsidyAmount.toLocaleString()}
                          </div>
                          <p className="text-sm text-muted-foreground">Government Subsidy</p>
                        </div>
                      )}
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          ₹{results.netCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Net Investment</p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">
                          ₹{results.annualSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Annual Savings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                        Payback & ROI
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {results.paybackYears.toFixed(1)} years
                        </div>
                        <p className="text-muted-foreground">Payback Period</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          ₹{results.totalSavings.toLocaleString()}
                        </div>
                        <p className="text-muted-foreground">25-Year Total Savings</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Leaf className="w-6 h-6 text-green-600" />
                        Environmental Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {results.annualCO2Savings.toFixed(0)} kg
                        </div>
                        <p className="text-muted-foreground">Annual CO₂ Reduction</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-700 mb-2">
                          {(results.totalCO2Savings / 1000).toFixed(1)} tons
                        </div>
                        <p className="text-muted-foreground">25-Year CO₂ Savings</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardContent className="text-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
                    <p className="mb-6">Get a detailed quote and professional consultation</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <a className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Get Free Consultation
                        </a>
                      </Link>
                      <Link href="/services">
                        <a className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                          View Our Services
                        </a>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Solar Makes Sense</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the benefits and considerations of solar energy investment
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto text-yellow-600 mb-4" />
                <CardTitle>Immediate Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start saving on your electricity bills from day one of installation
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Long-term Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solar panels have a 25+ year warranty with minimal maintenance required
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce your carbon footprint and contribute to a cleaner environment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}