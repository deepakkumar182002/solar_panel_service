import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, Zap, IndianRupee, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SolarCalculator() {
  const [monthlyUsage, setMonthlyUsage] = useState("");
  const [results, setResults] = useState<{
    systemSize: number;
    monthlySavings: number;
    co2Reduction: number;
  } | null>(null);

  const calculateSolar = () => {
    const usage = parseFloat(monthlyUsage);
    if (isNaN(usage) || usage <= 0) {
      console.log("Invalid input");
      return;
    }

    const systemSize = Math.ceil((usage * 12) / 1200);
    const monthlySavings = Math.round(usage * 7 * 0.75);
    const co2Reduction = Math.round(systemSize * 1.5 * 12);

    setResults({ systemSize, monthlySavings, co2Reduction });
    console.log("Calculator results:", { systemSize, monthlySavings, co2Reduction });
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-950 dark:to-cyan-950"
      id="calculator"
      data-testid="section-calculator"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4" data-testid="text-calculator-title">
            Solar Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your potential savings and environmental impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthly-usage" className="text-base mb-2 block">
                    Monthly Electricity Usage (kWh)
                  </Label>
                  <Input
                    id="monthly-usage"
                    type="number"
                    placeholder="e.g., 500"
                    value={monthlyUsage}
                    onChange={(e) => setMonthlyUsage(e.target.value)}
                    className="text-lg"
                    data-testid="input-monthly-usage"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Check your electricity bill for your average monthly consumption
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  onClick={calculateSolar}
                  data-testid="button-calculate"
                >
                  <Calculator className="mr-2 w-5 h-5" />
                  Calculate Savings
                </Button>

                {results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                  >
                    <Card className="bg-primary/5" data-testid="card-result-system-size">
                      <CardContent className="p-6 text-center">
                        <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-heading font-bold text-primary mb-1">
                          {results.systemSize} kW
                        </div>
                        <p className="text-sm text-muted-foreground">Recommended System Size</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-500/5" data-testid="card-result-savings">
                      <CardContent className="p-6 text-center">
                        <IndianRupee className="w-8 h-8 text-green-600 dark:text-green-500 mx-auto mb-3" />
                        <div className="text-3xl font-heading font-bold text-green-600 dark:text-green-500 mb-1">
                          ₹{results.monthlySavings}
                        </div>
                        <p className="text-sm text-muted-foreground">Estimated Monthly Savings</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-500/5" data-testid="card-result-co2">
                      <CardContent className="p-6 text-center">
                        <Leaf className="w-8 h-8 text-blue-600 dark:text-blue-500 mx-auto mb-3" />
                        <div className="text-3xl font-heading font-bold text-blue-600 dark:text-blue-500 mb-1">
                          {results.co2Reduction} kg
                        </div>
                        <p className="text-sm text-muted-foreground">Annual CO₂ Reduction</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
